import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const getBreadcrumbPath = (path) => {
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbs = [];
  let accumulatedPath = '';

  pathSegments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`;
    breadcrumbs.push({
      name: segment.charAt(0).toUpperCase() + segment.slice(1), 
      path: accumulatedPath,
    });
  });

  return breadcrumbs;
};


const Breadcrumb = () => {
  const location = useLocation(); 

  const breadcrumbs = getBreadcrumbPath(location.pathname);

  return (
    <nav aria-label="breadcrumb" className="flex items-center space-x-2 ml-10  mt-1 text-slate-400 text-[13px]"> 
      <ol className="flex text-gray-600 space-x-1"> 
        <li className="flex items-center">
          <Link to="/" className="hover:text-orange-500 underline">Home</Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2"><FontAwesomeIcon icon={faChevronRight} /></span>
            <Link to={breadcrumb.path} className="hover:text-orange-500 underline">
              {breadcrumb.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
