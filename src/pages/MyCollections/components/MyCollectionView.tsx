import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColumns, GridToolbar } from '@mui/x-data-grid'
import { Box, Drawer, Typography } from '@mui/material'

import InfoIcon from '@mui/icons-material/Info'
import { TMyCollection } from './MyCollections'

export type TMyDocument = {
  id: string
  title: string
  lastIndexedAt: string
}

type Props = {
  myCollection: TMyCollection
}
const MyCollectionView = ({ myCollection }: Props) => {
  const [myCollections, setMyCollections] = useState<TMyDocument[]>([])
  const [openMyCollection, setOpenMyCollection] = useState<string | undefined>(undefined)
  useEffect(
    () =>
      setMyCollections([
        {
          id: '1',
          title: 'Clinical Study 1',
          lastIndexedAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Failure analysis',
          lastIndexedAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Component Specification',
          lastIndexedAt: new Date().toISOString(),
        },
      ]),
    [],
  )

  const handleOpenMyCollection = useCallback((id: string) => {
    setOpenMyCollection(id)
    return
  }, [])

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 90,
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'actions',
        type: 'actions',
        headerName: '',
        width: 60,
        cellClassName: 'actions',
        getActions: ({ id }) => {
          return [
            <GridActionsCellItem
              icon={<InfoIcon />}
              label="Open MyCollection"
              className="textPrimary"
              onClick={e => handleOpenMyCollection(id as string)}
              color="inherit"
            />,
          ]
        },
      },
      {
        field: 'title',
        headerName: 'Document title',
        headerAlign: 'center',
        align: 'left',
        width: 450,
      },
      {
        field: 'lastIndexedAt',
        headerName: 'Last indexed',
        headerAlign: 'center',
        align: 'center',
        width: 210,
      },
      //   {
      //     field: 'actions',
      //     type: 'actions',
      //     headerName: 'Actions',
      //     width: 100,
      //     cellClassName: 'actions',
      //     getActions: ({ id }) => {
      //       return [
      //         <GridActionsCellItem
      //           icon={<EditIcon />}
      //           label="Edit"
      //           className="textPrimary"
      //           // onClick={handleEditClick(id)}
      //           color="inherit"
      //         />,
      //         <GridActionsCellItem
      //           icon={<DeleteIcon />}
      //           label="Delete"
      //           // onClick={handleDeleteClick(id)}
      //           color="inherit"
      //         />,
      //       ]
      //     },
      //   },
    ],
    [handleOpenMyCollection],
  )

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          padding: 0.5,
        }}
      >
        <Typography component={'span'} variant="body2" sx={{ margin: '5px 7px' }}>
          Collection: <strong>{myCollection.name}</strong>
        </Typography>
        {/* <Typography component={'span'} variant="body2" sx={{ margin: '5px 7px' }}>
          |
        </Typography> */}
      </Box>
      <Drawer
        anchor="right"
        open={!!openMyCollection}
        onClose={() => setOpenMyCollection(undefined)}
      >
        <Box width="80vw">Hello</Box>
      </Drawer>
      <Box sx={{ height: 'calc(100vh - 70px)', width: '100%' }}>
        <DataGrid
          rows={myCollections}
          columns={columns}
          pageSize={5}
          components={{
            Toolbar: GridToolbar,
          }}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
        />
      </Box>
    </>
  )
}

export default MyCollectionView
