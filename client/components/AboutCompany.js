import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function AboutCompany() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <div style={{ fontSize: '40px', textAlign: 'center' }}>
        <Typography gutterBottom variant="h2" component="h2" id="reviewbanner">
          Ray's Kitchen
        </Typography>

        <Typography gutterBottom variant="h6" component="h6">
          New Lower Prices on Hundreds of Items!
        </Typography>
      </div>
      <div>
        <img
          src="/images/raysfoodbanner.jpeg"
          style={{ width: '600px', height: '400px' }}
        />
      </div>
    </div>
  );
}
