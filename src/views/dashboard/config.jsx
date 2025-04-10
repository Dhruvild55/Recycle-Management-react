import ProfilePic from "../../shared/components/ProfilePic";

export const headres = [
  {
    key: "name",
    label: "name",
    render: (row) => {
      return (
        <div
          className="d-flex mx-2"
          style={{ alignItems: "center ", gap: "20px" }}
        >
          <ProfilePic image={row.imagePath} name={row.name} />
          <span>{row.name}</span>
        </div>
      );
    },
  },
  {
    key: "collectionWeight",
    label: "collection",
    render: (row) => {
      return (
        <span
          className="d-flex gap-3 align-items-center"
          style={{ fontSize: "14px", fontWeight: "400", color: "#414651" }}
        >
          Collection: {"  "}
          <p
            className=""
            style={{
              marginBottom: "0px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {" "}
            {row?.collectionWeight % 1 === 0
              ? row?.collectionWeight
              : row?.collectionWeight.toFixed(2)}
            {"kg"}
          </p>
        </span>
      );
    },
  },
];
