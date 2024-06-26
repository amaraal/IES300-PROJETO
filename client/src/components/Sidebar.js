import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import '../css/menuLateral/menu.css';

export default function Sidebar() {
    const [expandedMenu, setExpandedMenu] = useState(null);

    const toggleSubMenu = (menuId) => {
        if (expandedMenu === menuId) {
            setExpandedMenu(null); 
        } else {
            setExpandedMenu(menuId); 
        }
    };

    return (
        <div id="sidebar-container" className="menu-lateral">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "100%" }}>
                    Serviços
                </Dropdown.Toggle>

                <Dropdown.Menu show={expandedMenu === "servicos"} style={{ width: "100%" }}>
                    <Dropdown.Item href="/servicos/cadastrar">Cadastrar Serviço</Dropdown.Item>
                    <Dropdown.Item href="/servicos/consultar">Consultar Serviço</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <hr className="sidebar-divider" /> 
            
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "100%" }}>
                    Clientes
                </Dropdown.Toggle>

                <Dropdown.Menu show={expandedMenu === "clientes"} style={{ width: "100%" }}>
                <Dropdown.Item href="/clientes/cadastrar">Cadastrar Cliente</Dropdown.Item>
                    <Dropdown.Item href="/clientes/consultar">Consultar Cliente</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <hr className="sidebar-divider" /> 

            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "100%" }}>
                    Técnicos
                </Dropdown.Toggle>

                <Dropdown.Menu show={expandedMenu === "tecnico"} style={{ width: "100%" }}>
                <Dropdown.Item href="/tecnicos/cadastrar">Cadastrar Técnico </Dropdown.Item>
                    <Dropdown.Item href="/tecnicos/consultar">Consultar Técnico</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <hr className="sidebar-divider" /> 

            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "100%" }}>
                   Chamado
                </Dropdown.Toggle>

                <Dropdown.Menu show={expandedMenu === "chamado"} style={{ width: "100%" }}>
                    <Dropdown.Item href="/chamados/cadastrar">Cadastrar Chamado</Dropdown.Item>
                    <Dropdown.Item href="/chamados/consultar">Consultar Chamado</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <hr className="sidebar-divider" /> 

            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "100%" }}>
                   Orçamento
                </Dropdown.Toggle>

                <Dropdown.Menu show={expandedMenu === "orcamento"} style={{ width: "100%" }}>
                    <Dropdown.Item href="/orcamento/cadastrar">Realizar Orçamento</Dropdown.Item>
                    <Dropdown.Item href="/orcamento/consultar">Consultar Orçamento</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>




            <hr className="sidebar-divider" /> 

            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "100%" }}>
                   Atendente
                </Dropdown.Toggle>

                <Dropdown.Menu show={expandedMenu === "chamado"} style={{ width: "100%" }}>
                    <Dropdown.Item href="/atendentes/cadastrar">Cadastrar Atendente </Dropdown.Item>
                    <Dropdown.Item href="/atendentes/consultar">Consultar Atendente </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <hr className="sidebar-divider" /> 

            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "100%" }}>
                   Relatório
                </Dropdown.Toggle>

                <Dropdown.Menu show={expandedMenu === "chamado"} style={{ width: "100%" }}>
                    <Dropdown.Item href="/servicos_realizados">Chamados/Orçamentos</Dropdown.Item> {/* uso de quebra de linha com a tag <br> */}
                </Dropdown.Menu>
            </Dropdown> 
        </div>
    );
}
