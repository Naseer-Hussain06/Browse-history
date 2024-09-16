import {Component} from 'react'
import ListItem from './listitem'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class BrowseHistory extends Component {
  state = {
    inputsearch: '',
    updatedHistoryList: initialHistoryList,
    isTrue: false,
  }

  onChangeEvent = event => {
    this.setState({inputsearch: event.target.value, isTrue: false})
  }

  deleteitem = id => {
    const {updatedHistoryList} = this.state
    const filteredListContainer = updatedHistoryList.filter(
      eachitem => eachitem.id !== id,
    )
    this.setState({
      updatedHistoryList: filteredListContainer,
      isTrue: filteredListContainer.length === 0,
    })
  }

  render() {
    const {inputsearch, updatedHistoryList, isTrue} = this.state
    const searchHistoryList = updatedHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(inputsearch.toLowerCase()),
    )
    return (
      <div>
        <div className="historySearchContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logoImage"
          />
          <div className="searchIconContainer">
            <div className="searchIcon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchInputIcon"
              />
            </div>
            <input
              type="search"
              placeholder="search"
              className="inputSearch"
              value={inputsearch}
              onChange={this.onChangeEvent}
            />
          </div>
        </div>

        {!isTrue && (
          <div className="unorderedListContainer">
            <ul className="unorderedList">
              {searchHistoryList.map(eachItem => (
                <ListItem
                  key={eachItem.id}
                  listitems={eachItem}
                  deleteitem={this.deleteitem}
                />
              ))}
            </ul>
          </div>
        )}

        {isTrue && (
          <div className="unorderedListContainer2">
            <p className="nohistorypara">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default BrowseHistory
