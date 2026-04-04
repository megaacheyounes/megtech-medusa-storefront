const BrandsSection = () => {
  const brands = ["NVIDIA", "INTEL", "AMD", "ASUS", "CORSAIR", "RAZER", "LOGITECH"]
  
  return (
    <div className="bg-neutral-50 py-12 border-b border-neutral-200 overflow-hidden">
      <div className="content-container">
        <p className="text-center text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-8">
          Authorized Retailer For Top Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-2xl md:text-3xl font-black text-neutral-400 tracking-tighter hover:text-black transition-colors cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandsSection
