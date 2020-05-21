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
      onClickSearch: false,
      onClickBackNewEvent: false,
      dataAfterFilter: [],
      searchInput: {
        city: '',
      }
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

  onClickSearch = async () => {
    try {
      const { data } = await fetcher.get(`/events?city=${this.state.searchInput.city}`);
      this.setState({ onClickSearch: true, dataAfterFilter: data });

    } catch (error) {

    }

  }
  backNewEvent = () => {
    this.setState({ onClickBackNewEvent: true })
  }
  newEvent = () => {
    this.setState({ newEventClicked: true })
  }
  onChangeHandler = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const savedData = { ...this.state.searchInput, [target.name]: value };
    this.setState({ searchInput: savedData });
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
                options={cities}
                getOptionLabel={(city) => city.name}
                onSelect={this.onChangeHandler}
                renderInput={(params) => <TextField autocomplete="on" {...params} size='small' className="form-control mb-2" variant="outlined" name="city" placeholder="Search By City" value={this.state.searchInput.city} onChange={this.onChangeHandler} />} />

              <button type="button" class="btn btn-warning" onClick={this.onClickSearch}>Search</button>
              <div>
              </div>
              <div>
                <button type="button" class="btn btn-warning mt-2" onClick={this.backNewEvent}>Back</button>
              </div>
            </div>
            {this.state.newEventClicked && <Redirect to="/create/event/" />}
            {this.state.onClickBackNewEvent && <Redirect to="/" />}

          </div>
        </div>

        {
          this.state.searchInput.city === '' ?
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
            :
            this.state.onClickSearch ?
              this.state.dataAfterFilter.map((event, index) => (
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
              :
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