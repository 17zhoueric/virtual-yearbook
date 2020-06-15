const React = require('react');

const SearchLayer = function () {
  return (
    <div id = "SearchLayer">
    <div className = "Circle">
      <div className = "Circle2"></div>
    </div>    
    <div className = "text">SEARCH
      <div className = "SearchBar">
         <form action="/result" method="get">
          <select name="search" id="search">
            <option value="Name">Name</option>
            <option value="Major">Major</option>
            <option value="College">College</option>
            <option value="Gender">Gender</option>
          </select>
            <input type="text" placeholder="Search.." name="search2"></input>
            <button type="submit">Submit</button>
          </form>
          <div id = 'NoResultsFound'>No results found</div>
        </div>
    </div>
      
  </div>
  );
}

module.exports = SearchLayer;