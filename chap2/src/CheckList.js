import React, { Component } from 'react';

class CheckList extends Component {

  render () {
    let tasks = this.props.tasks.map((each) => {
      return(
        <li className="checklist__task">
          <input type="checkbox" defaultChecked={each.done} />
          {each.name}
          <a href="#" className="checklist__task--remove" />
        </li>
      );
    });

    console.log("***************");
    console.log(this.props.tasks);
    console.log(tasks);
    console.log("***************");
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
      </div>
    )
  }


}

export default CheckList;
