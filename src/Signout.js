import React from "react";
import Typography from '@material-ui/core/Typography';
export default function Signout() {
    setTimeout(() => {
        window.location.href = "/";
      }, 3000);

    return (
        <Typography>Loading...</Typography>
    );
}