import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridToolbar,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { Box, Drawer } from '@mui/material'

import InfoIcon from '@mui/icons-material/Info'
import MyCollectionView from './MyCollectionView'
import { api } from 'src/api/internalApi'
import LoadingCentered from 'src/components/Loaders/LoadingCentered'

export type TMyCollection = {
  id: string
  name: string
  stats: {
    count: number
    size: number
  }
}

const MyCollections = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [myCollections, setMyCollections] = useState<TMyCollection[]>([])
  const [openMyCollection, setOpenMyCollection] = useState<TMyCollection | undefined>(undefined)
  useEffect(() => {
    api.collections
      .get()
      .then(response => {
        setMyCollections(response.results)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const handleOpenMyCollection = useCallback((myCollection: TMyCollection) => {
    setOpenMyCollection(myCollection)
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
        getActions: ({ id, row }) => {
          return [
            <GridActionsCellItem
              icon={<InfoIcon />}
              label="Open MyCollection"
              className="textPrimary"
              onClick={e => handleOpenMyCollection(row)}
              color="inherit"
            />,
          ]
        },
      },
      {
        field: 'name',
        headerName: 'Name',
        headerAlign: 'center',
        align: 'left',
        width: 350,
      },
      {
        field: 'count',
        headerName: '# of documents',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        valueGetter: (params: GridValueGetterParams) => params.row.stats.count,
      },
      {
        field: 'stats.size',
        headerName: 'Size',
        description: 'Size all the documents (mb).',
        headerAlign: 'center',
        align: 'center',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
          `${Math.floor(params.row.stats.size / 1024)} Mb`,
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
      <Drawer
        anchor="right"
        open={!!openMyCollection}
        onClose={() => setOpenMyCollection(undefined)}
      >
        <Box width="80vw">
          {openMyCollection && <MyCollectionView myCollection={openMyCollection} />}
        </Box>
      </Drawer>
      <Box sx={{ height: 'calc(100vh - 70px)', width: '100%' }}>
        {isLoading ? (
          <LoadingCentered main="Loading collections..." />
        ) : (
          <DataGrid
            rows={myCollections}
            columns={columns}
            pageSize={15}
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
        )}
      </Box>
    </>
  )
}

export default MyCollections
