import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const {
  REACT_APP_COMMIT_HASH = "e0292a3f0ea67ad62759b1f482a9ecd0f310150e",
} = process.env;

export const BuildInfo = () => {
  const theme = useTheme();
  return (
    <div>
      <Typography>
        Built via commit{" "}
        <a
          style={{ color: theme.palette.info.light }}
          rel="noreferrer"
          target="_blank"
          title="Latest build commit"
          href={`https://github.com/Hacksore/Hacksore/commit/${REACT_APP_COMMIT_HASH}`}
        >
          {REACT_APP_COMMIT_HASH.substr(0, 7)}
        </a>
      </Typography>
    </div>
  );
};