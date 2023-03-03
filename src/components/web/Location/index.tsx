import GoogleMapReact from 'google-map-react';
import { Container } from './styles';

const Location = (): JSX.Element => {
  const defaultProps = {
    center: {
      lat: -23.4195765,
      lng: -46.3268805,
    },
    zoom: 17,
  };
  return (
    <Container id="location">
      <article>
        <h2>Estamos muito bem localizados esperando por você</h2>
        <h3>ONDE NOS ENCONTRAR</h3>

        <div className="map-wrapper">
          <div className="map-container">
            <GoogleMapReact
              bootstrapURLKeys={{ key: `` }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            />
          </div>
        </div>
        <p>Estr. de Santa Isabel, 1201 - Caputera, Arujá - SP, 07435-180</p>
      </article>
    </Container>
  );
};

export default Location;
