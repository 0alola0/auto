import React from 'react';

const AppBreadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="hidden pt-6 pb-5 sm:flex items-center space-x-[4px]">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <span className={index === breadcrumbs.length - 1 ? 'font-helvetica-neue font-normal text-xs leading-5 text-left text-active-orange' : 'font-helvetica-neue font-normal text-xs leading-5 text-left'}>{breadcrumb}</span>
          {index < breadcrumbs.length - 1 && <span>&gt;</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default AppBreadcrumbs;
