const brands = [
  "NVIDIA",
  "Intel",
  "AMD",
  "ASUS",
  "Corsair",
  "Razer",
  "Logitech"
]

const Brands = () => {
  return (
    <div className="py-16 bg-white w-full border-b border-ui-border-base">
      <div className="content-container mx-auto">
        <h3 className="text-center text-ui-fg-subtle text-sm font-medium uppercase tracking-widest mb-10">
          Top Brands We Carry
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-70">
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="text-2xl font-bold text-ui-fg-muted hover:text-brand transition-colors duration-300 select-none cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands
