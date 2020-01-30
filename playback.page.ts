export class PlaybackPage implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.MapElement.nativeElement,
      {
        center: {lat: -34.397, lng: 150.644},
        zoom:8
      });
  }
  map;
@ViewChild('mapElement') MapElement;
