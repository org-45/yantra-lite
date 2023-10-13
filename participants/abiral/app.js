function findMe(){
  const status  = document.querySelector("#status");
  const coordinate = document.querySelector('#coordinate');
  const coordinatedetail = document.querySelector('#coordinatedetail');
 

  coordinate.href="";
  coordinate.textContent="";

  function success(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent="Success";
    coordinate.href =`https://www.google.com/maps/@${latitude},${longitude},163m/data=!3m1!1e3?entry=ttu`
    coordinate.textContent =`Click Here`;
  
    coordinatedetail.textContent = `Latitude : ${latitude} , Longitude : ${longitude}`;

  }
  function error(){
    status.textContent = "Unable to Find your Location";
  }
  if(!navigator.geolocation){
    status.textContent="Geolocation NOT SUPPORTED";

  }
  else{
    status.textContent = "Searching .... .";
    navigator.geolocation.getCurrentPosition(success,error);
  }
}
