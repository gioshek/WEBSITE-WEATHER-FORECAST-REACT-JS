import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "14c5fd6c41a5eb41f829636c45f6b531";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: undefined,
      city_name: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined,
      title: "Погодное приложение"
    }
  }

  changeText = (e) => {
    this.setState({
			title: "Погода на сегодня"
		});
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      // console.log(data);

      var sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      var sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();


      this.setState({
        temp: data.main.temp,
        city_name: data.name,
        country: data.sys.country,
        sunrise: sunrise,
        sunset: sunset,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city_name: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"
      })
    }
  }

  render() {
    return(
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
              <Info changeText={this.changeText} title={this.state.title} />
            </div>
            <div className="col-sm-7 form">
              <Form weatherMethod={this.gettingWeather}/>
              <Weather 
              temp={this.state.temp}
              city_name={this.state.city_name}
              country={this.state.country}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>)
  }
}

export default App;
