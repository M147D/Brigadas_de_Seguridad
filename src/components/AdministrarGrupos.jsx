import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
//Componentes
import BotonGeneral from "./BotonGeneral";
import DataGridGrupos from "./DataGridGrupos";
import TextField from "@mui/material/TextField";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function AdministrarGrupos() {
    return (
    <Box sx={{ display: "flex" }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "135ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Grupo" variant="outlined" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexdirection: "row",
              margin: 1,
            }}
          >
            <BotonGeneral texto="Buscar" />
          </Box>
          <DataGridGrupos />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexdirection: "row",
              margin: 1,
            }}
          >
            <BotonGeneral texto="Nuevo" />
            <BotonGeneral texto="Editar" />
            <BotonGeneral texto="Eliminar" />
          </Box>
        </div>
      </Box>
    </Box>
  );
}
