function ChatsSelectTopbar({ selectedChatsCategory }) {
  console.log(selectedChatsCategory);
  return (
    <div className="p-5">
      {selectedChatsCategory === 0 && <h3>Collab Chat</h3>}

      {selectedChatsCategory === 1 && <h3>Team Chat</h3>}

      {selectedChatsCategory === 2 && <h3>Private Chat</h3>}
    </div>
  );
}

export default ChatsSelectTopbar;
