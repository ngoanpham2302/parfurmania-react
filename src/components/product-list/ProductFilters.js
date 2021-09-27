// Product Filter

import { BRANDS, SEASONS } from "data/filterData";

// Brand Filter
function BrandFilterItem({
  brand,
  brandFilter,
  activeFilter,
  brandId,
  filterId,
}) {
  return (
    <li
      className={`filter__item filter__brand-item ${
        activeFilter && brandId === filterId && "active"
      }`}
      onClick={() => brandFilter(brand, brandId)}
    >
      {brand}
    </li>
  );
}

function BrandsFilter({ brandFilter, activeFilter, filterId }) {
  return (
    <div className="filter-entry filter__brands">
      <h4 className="section-title filter-title">LỌC THEO THƯƠNG HIỆU</h4>

      <ul className="filter__brands-list filter__list">
        {BRANDS.map((brand) => (
          <BrandFilterItem
            key={brand.id}
            brandId={brand.id}
            brand={brand.name}
            brandFilter={brandFilter}
            activeFilter={activeFilter}
            filterId={filterId}
          />
        ))}
      </ul>
    </div>
  );
}

// Season Filter
function SeasonFilterItem({ season }) {
  return <li className="filter__item filter__season-item">{season}</li>;
}

function SeasonsFilter() {
  return (
    <div className="filter-entry filter__season">
      <h4 className="section-title filter-title">LỌC THEO MÙA</h4>

      <ul className="filter__season-list filter__list">
        {SEASONS.map((season) => (
          <SeasonFilterItem key={season.id} season={season.name} />
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
      <SeasonsFilter />
    </div>
  );
}
