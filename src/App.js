import ContenedorGeneral from "./components/ContenedorGeneral";
import AdmistrarGrupos from './components/AdministrarGrupos';
import EditarGrupo from './components/EditarGrupo';
import AdministrarGrupos from "./components/AdministrarGrupos";

export default function App() {
  return(
    <div>
      {/*<ContenedorGeneral titulo="Crear Grupo"/>*/}
      {/*<AdmistrarGrupos titulo="Administrar Grupo"/>*/}
      {/*<EditarGrupo titulo="Editar Grupo"/>*/}
      <ContenedorGeneral titulo="asmirGrupo" contenido={<AdministrarGrupos/>}/>
    </div>
  )

}
