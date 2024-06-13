import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SidebarItem({ title, icon, route }) {
    return (
        <Link to={route} className="w-full h-12 flex pl-5 cursor-pointer text-white font-semibold text-lg items-center justify-start gap-3 hover:bg-slate-800 rounded-xl">
            <span>{icon}</span>
            <span>{title}</span>
        </Link>
    );
}

SidebarItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
};
