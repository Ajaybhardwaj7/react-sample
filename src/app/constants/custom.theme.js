
import getMuiTheme  from 'material-ui/styles/getMuiTheme';

const CitadelLightTheme = getMuiTheme({
  palette: {
    textColor: '#555555',
    alternateTextColor: '#ffffff',
    primary1Color: '#009edb',
    primary2Color: '#005293',
    primary3Color: '#e7e7e7',
    accent1Color : '#002f6c',
    accent2Color : '#dcdcdc',
    accent3Color: '#e7e7e7',
    borderColor: '#e7e7e7',
    canvasColor: '#ffffff',
    pickerHeaderColor: '#005293',
    clockCircleColor: '#f6fbff'
  },
   tabs: {
      backgroundColor: '#ffffff',
      textColor: '#555555',
      selectedTextColor: '#005293'
  }
});

module.exports = CitadelLightTheme
