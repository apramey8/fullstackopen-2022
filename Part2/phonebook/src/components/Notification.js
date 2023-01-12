

const Notification = ({notify}) => {
    if (notify === null) {
      return null
    }
    const {message , className} = notify
    return (
      <div className={className}>
        {message}
      </div>
    )
  }

export default Notification