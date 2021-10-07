// Product Filter

import { BRANDS, SEASONS, GENDERS, CONCENTRATIONS } from "data/filterData";

function BrandsFilter({ brandFilter, activeFilter, filterId }) {
  return (
    <div className="filter-entry filter__brands">
      <h4 className="section-title filter-title">LỌC THEO THƯƠNG HIỆU</h4>

      <ul className="filter__brands-list filter__list">
        {BRANDS.map((brand) => (
          <li
            key={brand.id}
            className={`filter__item filter__brand-item ${
              activeFilter && brand.id === filterId && "active"
            }`}
            onClick={() => brandFilter(brand.name, brand.id)}
          >
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SeasonsFilter() {
  return (
    <div className="filter-entry filter__season">
      <h4 className="section-title filter-title">LỌC THEO MÙA</h4>

      <ul className="filter__season-list filter__list">
        {SEASONS.map((season) => (
          <li key={season.id} className="filter__item filter__season-item">
            {season.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function GendersFilter() {
  return (
    <div className="filter-entry filter__gender">
      <h4 className="section-title filter-title">LỌC THEO GIỚI TÍNH</h4>

      <ul className="filter__gender-list filter__list">
        {GENDERS.map((gender) => (
          <li key={gender.id} className="filter__item filter__gender-item">
            {gender.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConcentrationsFilter() {
  return (
    <div className="filter-entry filter__concentration">
      <h4 className="section-title filter-title">LỌC THEO NỒNG ĐỘ</h4>

      <ul className="filter__concentration-list filter__list">
        {CONCENTRATIONS.map((concen) => (
          <li
            key={concen.id}
            className="filter__item filter__concentratio-item"
          >
            {concen.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductFilters({
  brandFilter,
  clearAllFilters,
  activeFilter,
  filterId,
}) {
  return (
    <div className="products__filter">
      <div className="remove-filter-container">
        <button
          className="section__btn remove-filter__btn"
          onClick={clearAllFilters}
        >
          XÓA LỌC
        </button>
      </div>
      <BrandsFilter
        brandFilter={brandFilter}
        activeFilter={activeFilter}
        filterId={filterId}
      />
      <GendersFilter />
      <ConcentrationsFilter />
      <SeasonsFilter />
    </div>
  );
}
