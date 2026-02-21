'use client'

import { motion } from 'framer-motion'

const IMAGES = {
  founder:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408454/SHRIMI_MEMBER_ML_mdn7yf.png',
  cofounder:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408453/IPSIT_DAS_LEAD_MARKETING_mpoklh.png',
  techHead1:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408453/IPSIT_DAS_LEAD_MARKETING_mpoklh.png',
  techHead2:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408452/ANUSKA_SINHA_MEMBER_WEB_DEV_tipyrt.png',
  techHead3:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408451/ARYAN_KUMAR_LEAD_OPERATIONS_obmshf.png',
  webLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408401/ANUSHREE_SAXENA_MEMBER_WEB_DEV_aqh1wt.png',
  androidLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407151/SUBHAM_DUTTA_MEMBER_ML_p5xdv9.png',
  flutterLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407147/SHRIDIPA_DHAR_LEAD_ML_t6kwms.png',
  designLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407146/SHIVAM_TECHNICAL_HEAD_tvgbiu.png',
  cloudLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407141/NISTHA_MISHRA_TECHNICAL_HEAD_kfy6yp.png',
  mlLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407140/ISHIKA_JAISWAL_TECHNICAL_HEAD_yonvki.png',
  broadcastLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407141/NISTHA_MISHRA_TECHNICAL_HEAD_kfy6yp.png',
  marketingLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407140/ISHIKA_JAISWAL_TECHNICAL_HEAD_yonvki.png',
  opsLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407141/NISTHA_MISHRA_TECHNICAL_HEAD_kfy6yp.png',
  member1:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407141/NISTHA_MISHRA_TECHNICAL_HEAD_kfy6yp.png',
  member2:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407140/ISHIKA_JAISWAL_TECHNICAL_HEAD_yonvki.png',
}

const founders = [
  { name: 'Founder Name', role: 'Founder', img: IMAGES.founder },
  { name: 'Co-Founder Name', role: 'Co-Founder', img: IMAGES.cofounder },
]

const techHeads = [
  { name: 'Tech Head 1', role: 'Technical Head', img: IMAGES.techHead1 },
  { name: 'Tech Head 2', role: 'Technical Head', img: IMAGES.techHead2 },
  { name: 'Tech Head 3', role: 'Technical Head', img: IMAGES.techHead3 },
]

const techLeads = [
  { name: 'Web Lead', role: 'Web Dev Lead', img: IMAGES.webLead },
  { name: 'Android Lead', role: 'Android Lead', img: IMAGES.androidLead },
  { name: 'Flutter Lead', role: 'Flutter Lead', img: IMAGES.flutterLead },
  { name: 'Cloud Lead', role: 'Cloud Lead', img: IMAGES.cloudLead },
  { name: 'ML Lead', role: 'Machine Learning', img: IMAGES.mlLead },
]

const nonTechLeads = [
  { name: 'Design Lead', role: 'Graphic Designer', img: IMAGES.designLead },
  { name: 'Broadcast Lead', role: 'Broadcasting', img: IMAGES.broadcastLead },
  { name: 'Marketing Lead', role: 'Marketing', img: IMAGES.marketingLead },
  { name: 'Ops Lead', role: 'Operations', img: IMAGES.opsLead },
]

const members = Array.from({ length: 15 }).map((_, i) => ({
  name: `Member ${i + 1}`,
  role: 'Core Member',
  img: i % 2 === 0 ? IMAGES.member1 : IMAGES.member2,
}))

const MemberNode = ({
  name,
  role,
  img,
}: {
  name: string
  role: string
  img: string
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative group flex flex-col items-center overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/5 border-white/10 w-60 h-80 hover:border-[#FFC20E]/50"
  >
    <div className="relative w-full h-3/4 overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
      )}
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col items-center justify-center bg-black/80 h-1/4 border-t border-white/5">
      <h3 className="font-bold text-white text-center leading-tight text-lg truncate w-full">
        {name}
      </h3>
      <p className="text-center mt-1 text-[#FFC20E] font-medium text-xs uppercase tracking-wider truncate w-full">
        {role}
      </p>
    </div>
  </motion.div>
)

const Connector = ({ height = 'h-16' }) => (
  <div
    className={`w-0.5 ${height} bg-gradient-to-b from-[#FFC20E] to-white/10 mx-auto opacity-50`}
  />
)

export default function Members() {
  return (
    <section
      id="members"
      className="relative z-10 py-32 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <span className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300 border border-white/10 mb-6 inline-block">
          THE TEAM
        </span>
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Meet the <span className="text-[#FFC20E]">Nexus</span>
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-8 relative z-10">
          {founders.map((f, i) => (
            <MemberNode key={i} {...f} />
          ))}
        </div>

        <Connector height="h-24" />

        <div className="relative p-6 border border-white/5 rounded-3xl bg-white/[0.02] w-full max-w-5xl">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-gray-500 uppercase tracking-widest border border-white/10 rounded-full">
            Technical Heads
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {techHeads.map((h, i) => (
              <MemberNode key={i} {...h} />
            ))}
          </div>
        </div>

        <Connector height="h-24" />

        <div className="w-full relative p-8 border-t border-white/10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-[#FFC20E] font-bold uppercase tracking-widest border border-[#FFC20E]/20 rounded-full">
            Domain Leads
          </div>
          <h3 className="text-center text-white/50 mb-8 text-sm uppercase tracking-widest">
            Technical Domain
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techLeads.map((l, i) => (
              <MemberNode key={i} {...l} />
            ))}
          </div>
        </div>

        <Connector height="h-12" />

        <div className="w-full p-8">
          <h3 className="text-center text-white/50 mb-8 text-sm uppercase tracking-widest">
            Non-Technical Domain
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {nonTechLeads.map((l, i) => (
              <MemberNode key={i} {...l} />
            ))}
          </div>
        </div>

        <Connector height="h-24" />

        <div className="w-full relative p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-gray-500 uppercase tracking-widest border border-white/10 rounded-full">
            Core Team (15)
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {members.map((m, i) => (
              <MemberNode key={i} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
