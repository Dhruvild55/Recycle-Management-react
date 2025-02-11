import { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";

function BreadCrumbs() {
  const { id } = useParams();
  const location = useLocation();

  const pathNames = location.pathname.split("/").filter((x) => x);

  const items = pathNames.filter((value) => value !== encodeURIComponent(id));

  return (
    <Breadcrumb className="breadcrumb-section">
      {items.map((value, index) => {
        console.log(value);
        const last = index === items.length - 1;
        const to = location.pathname.split(value)[0];
        return last ? (
          <Breadcrumb.Item active key={value}>
            {value?.includes("%20")
              ? value?.split("%20")?.toString().replaceAll(",", " ")
              : value?.replaceAll("-", " ")}
          </Breadcrumb.Item>
        ) : (
          <Fragment key={value}>
            <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: to + value }}>
              {value?.replaceAll("-", " ")}
            </Breadcrumb.Item>
          </Fragment>
        );
      })}
    </Breadcrumb>
  );
}

export default BreadCrumbs;
