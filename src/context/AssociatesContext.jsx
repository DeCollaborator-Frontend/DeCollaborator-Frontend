import React, { createContext, useState, useEffect, useMemo } from "react";

export const AssociatesContext = createContext();

export const AssociatesProvider = ({ children }) => {
  const [associates, setAssociates] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [outgoingRequests, setOutgoingRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const jsonServerUrl = "http://localhost:3001"; // Assuming this is your JSON server URL

  // Fetch data from the JSON server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [associatesRes, followersRes, incomingReqRes, outgoingReqRes] =
          await Promise.all([
            fetch(`${jsonServerUrl}/associates`),
            fetch(`${jsonServerUrl}/followers`),
            fetch(`${jsonServerUrl}/incomingRequests`),
            fetch(`${jsonServerUrl}/outgoingRequests`),
          ]);

        const [
          associatesData,
          followersData,
          incomingRequestsData,
          outgoingRequestsData,
        ] = await Promise.all([
          associatesRes.json(),
          followersRes.json(),
          incomingReqRes.json(),
          outgoingReqRes.json(),
        ]);

        setAssociates(associatesData);
        setFollowers(followersData);
        setIncomingRequests(incomingRequestsData);
        setOutgoingRequests(outgoingRequestsData);
        console.log(outgoingRequestsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Function to accept a request and move it to associates
  const acceptRequest = (acceptedRequest) => {
    setAssociates((prev) => [...prev, acceptedRequest]);

    setIncomingRequests((prev) =>
      prev.map((request) =>
        request.id === acceptedRequest.id
          ? { ...request, accepted: true }
          : request,
      ),
    );
  };

  // Function to send a request and add it to outgoingRequests
  const sendRequest = (request) => {
    setOutgoingRequests((prev) => [...prev, request]);
  };

  // Reusable search functionality
  const searchItems = (items, term) => {
    return items.filter(
      (item) =>
        item.firstname.toLowerCase().includes(term.toLowerCase()) ||
        item.lastname.toLowerCase().includes(term.toLowerCase()) ||
        item.role.toLowerCase().includes(term.toLowerCase()) ||
        item.brand.toLowerCase().includes(term.toLowerCase()),
    );
  };

  // Filter followers to exclude associates
  const filterFollowers = (followersList, associatesList) => {
    return followersList.filter(
      (follower) =>
        !associatesList.some(
          (associate) =>
            associate.firstname === follower.firstname &&
            associate.lastname === follower.lastname,
        ),
    );
  };

  // Memoized search results to avoid recalculating on each render
  const filteredAssociates = useMemo(
    () => searchItems(associates, searchTerm),
    [associates, searchTerm],
  );
  const filteredFollowers = useMemo(() => {
    const nonAssociatesFollowers = filterFollowers(followers, associates);
    return searchItems(nonAssociatesFollowers, searchTerm);
  }, [followers, associates, searchTerm]);

  const filteredIncomingRequests = useMemo(
    () => searchItems(incomingRequests, searchTerm),
    [incomingRequests, searchTerm],
  );
  const filteredOutgoingRequests = useMemo(
    () => searchItems(outgoingRequests, searchTerm),
    [outgoingRequests, searchTerm],
  );

  const associatesLenght = associates.length || 0;
  const incomingReqLenght = incomingRequests.length;
  const outgoingReqLenght = outgoingRequests.length;

  console.log(associatesLenght, incomingReqLenght, outgoingReqLenght);

  return (
    <AssociatesContext.Provider
      value={{
        associates: filteredAssociates,
        followers: filteredFollowers,
        incomingRequests: filteredIncomingRequests,
        outgoingRequests: filteredOutgoingRequests,
        associatesLenght,
        incomingReqLenght,
        outgoingReqLenght,
        acceptRequest,
        sendRequest,
        setSearchTerm,
      }}
    >
      {children}
    </AssociatesContext.Provider>
  );
};
