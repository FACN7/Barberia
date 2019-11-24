import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getAllBookings')
      .then(res => res.json())
      .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return (
                <div>
                <div>
                  <h1>{item.booking_id}</h1>
                </div>
                  <div>
                    {item.customer_name}
                  </div>

                  <div>
                    {item.booking_date}
                  </div>

                  <div>
                    {item.booking_time}
                  </div>

                  <div>
                    {(item.customer_email)?item.customer_email:"none"}
                  </div>
                  <div>
                    {item.customer_phone}
                  </div>
                  <div>
                    {item.service_id}
                  </div>
                </div>

              );
            })}
          </div>
        ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
        }
      </div>
    );
  }
}

export default List;