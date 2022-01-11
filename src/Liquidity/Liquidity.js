import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import SwitchButton from "./SwitchButton";
import LiquidityDeployer from "./LiquidityDeployer";
import LiquidityRemover from "./RemoveLiquidity";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    maxWidth: 700,
    margin: "auto",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  footer: {
    marginTop: "155px",
  },
});

const useStyles = makeStyles(styles);

function Liquidity() {
  const classes = useStyles();

  const [deploy, setDeploy] = React.useState(true);

  const deploy_or_remove = (deploy) => {
    if (deploy === true) {
      return <LiquidityDeployer />;
    }
    return <LiquidityRemover />;
  };

  return (
    <div>
    <Container className="mt-5 mb-5">
      <Paper className={classes.paperContainer}>
        <Typography variant="h5" className={classes.title}>
          <SwitchButton setDeploy={setDeploy} />
        </Typography>

        {deploy_or_remove(deploy)}
      </Paper>
    </Container>

  </div>
  );
}

export default Liquidity;