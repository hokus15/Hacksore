import { makeStyles } from "@material-ui/core";
import { GitHub, LinkedIn, Email } from "@material-ui/icons";
import { lighten, darken } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    background: theme.palette.primary.main,
    color: "#fff",
    padding: "8px 10px 6px 10px",
    margin: "4px 8px 4px 8px",
    height: 40,
    width: 70,
    display: "block",
    "&:hover": {
      background: lighten(theme.palette.primary.main, 0.1),
      borderBottom: `4px solid ${darken(theme.palette.primary.main, 0.3)}`,
    },
  },
}));

export const Social = () => {
  const classes = useStyles();

  return (
    <div className="social-wrap">
      <a
        title="My Github"
        data-testid="github-link"
        href="https://github.com/Hacksore"
        rel="noreferrer"
        target="_blank"
        className={classes.link}
      >
        <GitHub />
      </a>
      <a
        title="My Linkedin"
        data-testid="linkedin-link"
        href="https://www.linkedin.com/in/seanboult"
        rel="noreferrer"
        target="_blank"
        className={classes.link}
      >
        <LinkedIn />
      </a>
      <a
        title="My Linkedin"
        data-testid="email-link"
        href="mailto:sean@boult.me"
        rel="noreferrer"
        target="_blank"
        className={classes.link}
      >
        <Email />
      </a>
    </div>
  );
};
