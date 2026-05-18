import { useState } from "react";
import { assignColorsByLetter } from "@/utils";

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
  return playerColors[key] ?? { bg: "#374151", text: "#f9fafb" };
};

const PlayerAvatar = ({ name }) => {
  const { bg, text } = getPlayerStyle(name);
  return (
    <div
      style={{
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: bg,
        color: text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: 700,
        border: "1.5px solid #0d0f14",
        marginLeft: -8,
        flexShrink: 0,
      }}
    >
      {name?.charAt(0) ?? "?"}
    </div>
  );
};

const EmptySlot = () => (
  <div
    style={{
      width: 26,
      height: 26,
      borderRadius: "50%",
      border: "1.5px dashed rgba(168,85,247,0.35)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: -8,
      flexShrink: 0,
    }}
  >
    <span style={{ fontSize: 14, color: "#4b5563", lineHeight: 1 }}>+</span>
  </div>
);

const MAX_DISPLAY = 3;

const TeamRow = ({ team, gameId, index, handleJoinTo }) => {
  const { players, team: teamName } = team;
  const isFull = players.length >= MAX_DISPLAY;
  const displayPlayers = players.slice(0, MAX_DISPLAY);
  const emptySlots = MAX_DISPLAY - displayPlayers.length;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        borderRadius: 10,
        transition: "background 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(168,85,247,0.06)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {/* Left: index + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
        <span
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            color: "#6b7280",
            width: 16,
            textAlign: "center",
          }}
        >
          #{index + 1}
        </span>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#959595" }}>
          {teamName}
        </span>
      </div>

      {/* Right: avatars + action */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", paddingLeft: 8 }}>
          {displayPlayers.map((p, i) => (
            <PlayerAvatar key={i} name={p.name} />
          ))}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptySlot key={`empty-${i}`} />
          ))}
        </div>

        {isFull ? (
          <span
            style={{
              fontSize: 10,
              color: "#dc2626",
              fontWeight: 700,
              letterSpacing: "0.5px",
              minWidth: 26,
              textAlign: "center",
            }}
          >
            FULL
          </span>
        ) : (
          <button
            onClick={() =>
              handleJoinTo({
                gameID: gameId,
                teamID: team.id,
              })
            }
            aria-label={`Join to ${teamName}`}
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "transparent",
              color: "#a855f7",
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(168,85,247,0.2)";
              e.currentTarget.style.borderColor = "#a855f7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)";
            }}
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
    <>
      <div
        style={{
          background: "#F8F8F8",
          //   borderRadius: 16,
          overflow: "hidden",
          width: 380,
          height: 400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "16px 16px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 6px #22c55e",
              }}
            />
            <span
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "#6b7280",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Live Lobby
            </span>
          </div>
          <span style={{ fontSize: 12, color: "#374151", fontWeight: 500 }}>
            +{" "}
            {Number(currentGame.playersOnline) > 1000
              ? `${Number(currentGame.playersOnline) / 1000} K`
              : Number(currentGame.playersOnline)}{" "}
            online
          </span>
        </div>

        {/* GAME TITLE */}
        <div style={{ padding: "12px 16px 10px" }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 26,
              color: "#9e9e9e",
              letterSpacing: 0.5,
              lineHeight: 1,
            }}
          >
            / {currentGame?.name.toLowerCase() ?? "Select a Game"}
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
            {currentGame.mood} · Season {currentGame.season}
          </div>
        </div>

        {/* TABS */}
        <div
          style={{
            margin: "0 16px 12px",
            background: "#161921",
            borderRadius: 10,
            padding: 4,
            display: "flex",
            gap: 2,
          }}
        >
          {PLATFORMS.map((p) => (
            <button
              key={p}
              onClick={() => setActivePlatform(p)}
              style={{
                flex: 1,
                background:
                  activePlatform === p
                    ? "rgba(168,85,247,0.18)"
                    : "transparent",
                border: "none",
                color: activePlatform === p ? "#c084fc" : "#6b7280",
                fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                cursor: "pointer",
                padding: "6px 14px",
                borderRadius: 8,
                transition: "all 0.2s",
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Section label */}
        <div
          style={{
            margin: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "#4b5563",
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Open squads
          </span>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#6b7280",
              fontSize: 11,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            ⚙ Filters
          </button>
        </div>

        {/* Team list  (type)*/}
        <div
          style={{
            padding: "0 8px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
            flex: 1,
          }}
        >
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

        {/* Search Now CTA */}
        <div style={{ padding: 16, paddingTop: 10 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #6d28d9, #a855f7)",
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -30,
                left: 30,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
                pointerEvents: "none",
              }}
            />
            <button
              onClick={handleSearchNow}
              style={{
                width: "100%",
                padding: "13px 0",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                letterSpacing: "1.5px",
                fontSize: 14,
                cursor: "pointer",
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ⚡ SEARCH NOW →
            </button>
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#374151",
              margin: "8px 0 0",
            }}
          >
            Auto-matches you with the next available squad
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchingGames;
