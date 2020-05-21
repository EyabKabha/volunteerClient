import React from 'react';
import fetcher from './api/fetcher';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import { CityContext } from './CityContext';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Redirect } from 'react-router';
class Maincard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEvents: [],
      images: ['images/street.jpg'],
      newEventClicked: false,
      city: '',
    }
  }

  componentDidMount = async () => {
    try {
      const { data } = await fetcher.get('/events');
      this.setState({ dataEvents: data })
      console.log(data)
    } catch (error) {

    }
  }
  newEvent = () => {
    this.setState({ newEventClicked: true })
  }
  render() {
    const { cities } = this.context;
    return (
      <div>

        <div class="row mt-3">
          <div class="col-md-3"></div>
          <div class="col-md-5">
            <h3 class="text-center">all events</h3>
          </div>

          <div class="col-md-3"></div>
        </div>

        <div class="container">
          <div class="row ml-5">
            <div class="col-sm mb-2">
              <button type="button" class="btn btn-warning" onClick={this.newEvent}>Add Event</button>
            </div>
            <div class="col-sm">

            </div>
            <div class="col-sm mb-2">
              <Autocomplete
                id="combo-box-demo"
                disableClearable={true}
                wrapperStyle={{ position: 'relative', display: 'inline-block', color: 'red' }}
                options={cities}
                getOptionLabel={(city) => city.name}
                onSelect={this.onChangeHandler}
                noOptionsText={'ישוב לא קיים'}
                renderInput={(params) => <TextField autocomplete="on" {...params} size='small' className="form-control mb-2" variant="outlined" name="city" placeholder="Search By City" value={this.state.city} onChange={this.onChangeHandler} />} />
              <select className="form-control mb-2" id="inputCar" name="vehicle_id">
                <option selected value="">Search by Type</option>
              </select>
              <div>
              <button type="button" class="btn btn-warning" onClick={this.newEvent}>Search</button>
            </div>
            </div>
            {this.state.newEventClicked && <Redirect to="/create/event/" />}

          </div>
        </div>

        {
          this.state.dataEvents.map((event, index) => (
            <Cards
              id={event.id}
              name={event.name}
              eventDesc={event.description}
              location={event.location}
              creation={event.creation_date}
              start_date={event.start_date}
              end_date={event.end_date}
              description={event.description}
              participents={event.participents}
              participents_limit={event.participents_limit}
              start_time={event.start_time}
              image={this.state.images[index]}
              first_name={event.user.first_name}
             
              phoneNumber={event.user.phone}
            />
          ))

        }
      </div>
    )
  }
}



Maincard.contextType = CityContext;


export default Maincard;