const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <h2>Search users</h2>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};

export default SearchBox;
