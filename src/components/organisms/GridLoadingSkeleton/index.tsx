import React from "react";
import { Box } from "@mui/system";
import { GridLoadingSkeletonProps } from "./GridLoadingSkeleton.interface";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import _ from "lodash";
import { Skeleton } from "@mui/material";

export default function GridLoadingSkeleton({
  rowCount,
}: GridLoadingSkeletonProps): JSX.Element {
	const range = React.useMemo(() => _.range(0, rowCount), [rowCount]);
  const columns = React.useMemo(() => {
    return range.map(
      (index): GridColDef => ({
        field: "id",
        headerName: "",
        flex: 2,
        renderHeader: () => (
					<Box px={2} width="100%">
          	<Skeleton variant="rectangular" width="50%" height={20} />
					</Box>
        ),
        renderCell: () => (
          <Box px={2} width="100%">
            <Skeleton
              variant="rectangular"
              width={"50%"}
              height={15}
              style={{ marginBottom: "5px" }}
            />
            <Skeleton variant="rectangular" width={"80%"} height={15} />
          </Box>
        ),
      })
    );
  }, [range]);

	const rows = React.useMemo(() => range.map((id) => ({ id }) ), [range]);

  return <DataGrid rows={rows} columns={columns} />;
}
