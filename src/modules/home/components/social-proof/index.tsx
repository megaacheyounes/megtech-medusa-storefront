const SocialProof = () => {
  return (
    <div className="py-20 bg-brand text-white">
      <div className="content-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">5+</span>
            <span className="text-lg font-medium opacity-90">Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">200+</span>
            <span className="text-lg font-medium opacity-90">Happy Customers</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">58 Wilayas</span>
            <span className="text-lg font-medium opacity-90">Coverage</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof
