import React from "react";
import { CenteredRow, CenteredColumn } from "./LayoutElements";
import { PlayersTeams } from "./AppState";
import { Button } from "./Button";

export function JoinTeam(props: {
  players: PlayersTeams;
  joinTeam: (team: "left" | "right") => void;
}) {
  const leftTeam = Object.keys(props.players).filter(
    (playerId) => props.players[playerId].team === "left"
  );
  const rightTeam = Object.keys(props.players).filter(
    (playerId) => props.players[playerId].team === "right"
  );

  return (
    <div>
      <div>Join Team:</div>
      <CenteredRow
        style={{
          alignItems: "flex-start",
        }}
      >
        <CenteredColumn>
          <div>LEFT BRAIN</div>
          {leftTeam.map((playerId) => (
            <div>{props.players[playerId].name}</div>
          ))}
          <div>
            <Button text="Join" onClick={() => props.joinTeam("left")} />
          </div>
        </CenteredColumn>
        <CenteredColumn>
          <div>RIGHT BRAIN</div>
          {rightTeam.map((playerId) => (
            <div>{props.players[playerId].name}</div>
          ))}
          <div>
            <Button text="Join" onClick={() => props.joinTeam("right")} />
          </div>
        </CenteredColumn>
      </CenteredRow>
    </div>
  );
}
