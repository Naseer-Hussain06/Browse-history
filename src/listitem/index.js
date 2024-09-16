import './index.css'

const ListItem = props => {
  const {listitems, deleteitem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listitems

  const onDelete = () => {
    deleteitem(id)
  }
  return (
    <li className="list-container">
      <div className="list-items">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo-image" alt="domain logo" />
        <p className="time">{title}</p>
        <p className="websitenames" href={domainUrl}>
          {domainUrl}
        </p>
        <div>
          <button
            type="button"
            data-testid="delete"
            className="button"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="deleteIcon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default ListItem
