import React from 'react'
import { connect } from 'react-redux'
import SearchInput, {createFilter} from 'react-search-input'

import { fetchReposData } from '../actions/ReposActions'
import { fetchCommittData, goBack } from '../actions/CommittsActions'
import { dispatchSearchTerm } from '../actions/SearchActions'
import { loadMoreData } from '../actions/LoadActions'

import Spinner from '../components/Spinner'
import List from '../components/List'
import './App.css'

const KEYS_TO_FILTERS = ['commit.message']

function mapStateToProps(state) {
  return {
    isReposLoading: state.repos.isLoading,
    isCommittsLoading: state.committs.isLoading,
    repoName: state.repos.data,
    committs: state.committs.data,
    showCommitts: state.committs.showCommitts,
    searchTerm: state.search.searchTerm,
    loadMoreData: state.load.loadMoreData
  };
}

class App extends React.Component {

  render() {
    const { isReposLoading, repoName, committs, showCommitts, searchTerm, isCommittsLoading, loadMoreData } = this.props || {};
    const filteredcommitts = committs.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
    const isReposEmpty = repoName.length === 0;
    const isCommittsEmpty = committs.length === 0;

    return (
      <div className='app'>

        {showCommitts ? <button className='btn' onClick={this._goBack}>back</button> : ''}

        {isReposEmpty ?
          (isReposLoading ? <Spinner /> : <h2>Empty.</h2>) :
          (!showCommitts ?
              <div>
                <List isCommitts={false} onRepoClick={this._fetchCommitts} list={repoName} />
              </div> :
              (isCommittsEmpty ?
                (isCommittsLoading ? <Spinner /> : <h2>Empty.</h2>) :
                <div>
                  <SearchInput className='search-box-wrapper' inputClassName='search-box' onChange={this._searchUpdated} />
                  <List onScroll={this._loadMoreData} loadMoreData={loadMoreData} isCommitts={true} list={filteredcommitts} />
                </div>
              )
            )
          }

      </div>
    )
  }

  componentWillMount() {
    this.props.dispatch(fetchReposData())
  }

  _fetchCommitts = (name) => {
    this.props.dispatch(fetchCommittData(name))
  }

  _goBack = () => {
    this.props.dispatch(goBack())
  }

  _searchUpdated = (term) => {
    this.props.dispatch(dispatchSearchTerm(term))
  }

  _loadMoreData = () => {
    this.props.dispatch(loadMoreData())
  }
}

export default connect(mapStateToProps, null)(App);
