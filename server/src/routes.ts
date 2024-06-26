import {Request, Response, Router} from 'express';
import mongoose from "mongoose";
const router: Router = Router();

import { TecnicoController } from "./controllers/TecnicoController";
import { ServicoController } from "./controllers/ServicoController";
import { AtendenteController } from "./controllers/AtendenteController";
import { ClienteController } from "./controllers/ClienteController";
import { OrcamentoController } from "./controllers/OrcamentoController";
import { ChamadoController } from "./controllers/ChamadoController";

mongoose.connect(process.env.MONGOURI!).catch(err => {
    console.error(err);
    return Promise.reject(err);
}).then(onfulfilled => console.log("CONECTADO AO BANCO"), (erro) => {
    console.log("ERRO AO CONECTAR AO BANCO");
    console.error(erro);
})

// TECNICOS
const tecnicoController = new TecnicoController();
router.post('/tecnicos/novo', tecnicoController.create)
router.get('/tecnicos/consultar', tecnicoController.getAll)
router.post('/tecnicos/editar', tecnicoController.edit)
router.delete('/tecnicos/deletar', tecnicoController.delete)

// SERVIÇOS
const servicoController = new ServicoController();
router.post('/servicos/novo', servicoController.create)
router.get('/servicos/consultar', servicoController.getAll)
router.post('/servicos/editar', servicoController.edit)
router.delete('/servicos/deletar', servicoController.delete)

// ORÇAMENTOS
const orcamentoController = new OrcamentoController();
router.post('/orcamentos/novo', orcamentoController.create)
router.get('/orcamentos/consultar', orcamentoController.getAll)
router.post('/orcamentos/editar', orcamentoController.edit)
router.delete('/orcamentos/deletar', orcamentoController.delete)

// CLIENTES
const clienteController = new ClienteController();
router.post('/clientes/novo', clienteController.create)
router.get('/clientes/consultar', clienteController.getAll)
router.post('/clientes/editar', clienteController.edit)
router.delete('/clientes/deletar', clienteController.delete)

// CHAMADOS
const chamadoController = new ChamadoController();
router.post('/chamados/novo', chamadoController.create)
router.get('/chamados/consultar', chamadoController.getAll)
router.post('/chamados/editar', chamadoController.edit)
router.delete('/chamados/deletar', chamadoController.delete)

// ATENDENTES
const atendenteController = new AtendenteController();
router.post('/atendentes/novo', atendenteController.create)
router.get('/atendentes/consultar', atendenteController.getAll)
router.post('/atendentes/editar', atendenteController.edit)
router.delete('/atendentes/deletar', atendenteController.delete)

// LOGIN e OUTRAS ROTAS

export { router };