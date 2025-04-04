import "./SideBar.scss";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="sidebar">
      <img src="/Twitter-Icon.svg" alt="logo" />
      <nav className="menu-navigation">
        <NavLink className="item-list" to={"/"}>
          <House size={32} weight="fill" />
          <span>Home</span>
     
        </NavLink>
        <NavLink className="item-list" to={"/tweet"}>
          <Hash size={32} />
          <span>Explorar</span>
        </NavLink>
     
        <a className="item-list">
          <Bell size={32} />
          <span>Notificação</span>
        </a>
     
        <a className="item-list">
          <Envelope size={32} />
          <span>Mensagens</span>
        </a>
     
        <a className="item-list">
          <BookmarkSimple size={32} />
          <span>Itens salvos</span>
        </a>
     
        <a className="item-list">
          <FileText size={32} />
          <span>Listas</span>
        </a>
     
        <a className="item-list">
          <User size={32} />
          <span>Perfil</span>
        </a>
     
        <a className="item-list">
          <DotsThreeCircle size={32} />
          <span>Mais</span>
        </a>
     
      </nav>
      <button className="new-tweet">
        <Pencil size={32} />
        <span>Tweet</span>
      </button>
    </aside>
  );
};
