import React, { PropTypes } from 'react'
import Waypoint from 'react-waypoint'
import './List.css'

const List = ({ list, onRepoClick, isCommitts, loadMoreData, onScroll }) => {
  let data = list;

  if (!loadMoreData) {
    data.length = 20;
  }

  if (data.length === 0) {
    return <h2>No Such Committ Message</h2>;
  }

  return (
    <div>
      <ol type='1'>
        {data.map((l, i) =>
          <li className='list' onClick={e => onRepoClick(l.name)} key={i}>
            {!isCommitts ? l.name : l.commit.message}
          </li>
        )}
        <Waypoint onEnter={onScroll} fireOnRapidScroll={false} />
      </ol>
    </div>
  )
}

List.propTypes = {
  list: PropTypes.any.isRequired,
  onRepoClick: PropTypes.func,
  isCommitts: PropTypes.any.isRequired
}

export default List
