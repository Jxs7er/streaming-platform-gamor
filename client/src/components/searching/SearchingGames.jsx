import { useState } from "react";
import styles from "./SearchingGames.module.css";

const PLATFORMS = ["Party", "Match", "Streams"];

const playerColors = {
  A: { bg: "#7c3aed", text: "#ede9fe" },
  B: { bg: "#0e7490", text: "#cffafe" },
  C: { bg: "#b45309", text: "#fef3c7" },
  D: { bg: "#166534", text: "#dcfce7" },
  E: { bg: "#831843", text: "#fce7f3" },
  F: { bg: "#1e40af", text: "#dbeafe" },
  G: { bg: "#7c3aed", text: "#ede9fe" },
  H: { bg: "#9a3412", text: "#ffedd5" },
};

const getPlayerStyle = (name) => {
  const letter = name?.charAt(0).toUpperCase() ?? "?";
  const index = letter.charCodeAt(0) % Object.keys(playerColors).length;
  const key = Object.keys(playerColors)[index];

  return (
    playerColors[key] ?? {
      bg: "#374151",
      text: "#f9fafb",
    }
  );
};

const PlayerAvatar = ({ name }) => {
  const { bg, text } = getPlayerStyle(name);

  return (
    <div
      className={styles.player_avatar}
      style={{
        background: bg,
        color: text,
      }}
    >
      {name?.charAt(0) ?? "?"}
    </div>
  );
};

const EmptySlot = () => (
  <div className={styles.empty_slot}>
    <span>+</span>
  </div>
);

const MAX_DISPLAY = 3;

const TeamRow = ({ team, gameId, index, handleJoinTo }) => {
  const { players, team: teamName } = team;

  const isFull = players.length >= MAX_DISPLAY;

  const displayPlayers = players.slice(0, MAX_DISPLAY);

  const emptySlots = MAX_DISPLAY - displayPlayers.length;

  return (
    <div className={styles.team_row}>
      {/* LEFT */}
      <div className={styles.team_left}>
        <span className={styles.team_index}>#{index + 1}</span>

        <span className={styles.team_name}>{teamName}</span>
      </div>

      {/* RIGHT */}
      <div className={styles.team_right}>
        <div className={styles.players_group}>
          {displayPlayers.map((p, i) => (
            <PlayerAvatar key={i} name={p.name} />
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptySlot key={`empty-${i}`} />
          ))}
        </div>

        {isFull ? (
          <span className={styles.full_label}>FULL</span>
        ) : (
          <button
            aria-label={`Join to ${teamName}`}
            className={styles.join_button}
            onClick={() =>
              handleJoinTo({
                gameID: gameId,
                teamID: team.id,
              })
            }
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

const SearchingGames = ({ currentGame, handleSearchNow, handleJoinTo }) => {
  const [activePlatform, setActivePlatform] = useState("Party");

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.live_wrapper}>
          <div className={styles.live_dot} />

          <span className={styles.live_label}>Live Lobby</span>
        </div>

        <span className={styles.online_label}>
          +{" "}
          {Number(currentGame.playersOnline) > 1000
            ? `${Number(currentGame.playersOnline) / 1000} K`
            : Number(currentGame.playersOnline)}{" "}
          online
        </span>
      </div>

      {/* GAME TITLE */}
      <div className={styles.title_container}>
        <h2 className={styles.title}>
          / {currentGame?.name.toLowerCase() ?? "Select a Game"}
        </h2>

        <span className={styles.subtitle}>
          {currentGame.mood} · Season {currentGame.season}
        </span>
      </div>

      {/* TABS */}
      <div className={styles.tabs_container}>
        {PLATFORMS.map((p) => (
          <button
            key={p}
            onClick={() => setActivePlatform(p)}
            active={`${activePlatform === p}`}
            className={styles.tab_button}
          >
            {p}
          </button>
        ))}
      </div>

      {/* SECTION */}
      <div className={styles.section_header}>
        <span className={styles.section_label}>Open squads</span>

        <button className={styles.filter_button}>⚙ Filters</button>
      </div>

      {/* TEAM LIST */}
      <div className={styles.team_list}>
        {currentGame?.searches
          ?.filter(({ type }) => type === activePlatform.toLowerCase())
          .map((team, index) => (
            <TeamRow
              key={team.id}
              team={team}
              gameId={currentGame.id}
              index={index}
              handleJoinTo={handleJoinTo}
            />
          ))}
      </div>

      {/* CTA */}
      <div className={styles.cta_wrapper}>
        <div className={styles.cta_container}>
          <div className={styles.circle_top} />

          <div className={styles.circle_bottom} />

          <button
            className={styles.search_button}
            onClick={() =>
              handleSearchNow({
                gameID: currentGame.id,
              })
            }
          >
            ⚡ SEARCH NOW →
          </button>
        </div>

        <p className={styles.cta_tip}>
          Auto-matches you with the next available squad
        </p>
      </div>
    </div>
  );
};

export default SearchingGames;
