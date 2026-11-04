import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

import Navbar from "../components/navbar/Navbar";
import CampaignCard from "../components/campaign/CampaignCard";
import api from "../services/api";

function Explore() {
  const [campaigns, setCampaigns] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const { data } = await api.get("/campaign/approved");
      setCampaigns(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "All" ? true : campaign.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Medical", "Education", "Animal", "Disaster"];
  const categoryIcons = { All: "✦", Medical: "🏥", Education: "🎓", Animal: "🐾", Disaster: "🌊" };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@1,500&display=swap');

        .ex-page {
          font-family: 'Sora', sans-serif;
          min-height: 100vh;
          background: #f7f9ff;
          position: relative;
          overflow-x: hidden;
        }
        .ex-blob-1 {
          position: fixed;
          top: -120px; right: -100px;
          width: 520px; height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14,165,233,0.09) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .ex-blob-2 {
          position: fixed;
          bottom: -120px; left: -80px;
          width: 440px; height: 440px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,97,255,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .ex-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 28px 100px;
        }

        /* Hero */
        .ex-hero { text-align: center; margin-bottom: 52px; }
        .ex-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.88);
          border: 1.5px solid rgba(14,165,233,0.22);
          backdrop-filter: blur(8px);
          border-radius: 99px;
          padding: 6px 18px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0f4c81;
          margin-bottom: 20px;
          box-shadow: 0 2px 12px rgba(15,76,129,0.07);
        }
        .ex-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #0ea5e9;
          animation: ex-pulse 2s ease-in-out infinite;
        }
        @keyframes ex-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(14,165,233,0); }
        }
        .ex-h1 {
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          color: #18181b;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .ex-h1 em {
          font-family: 'Lora', serif;
          font-style: italic;
          font-weight: 500;
          background: linear-gradient(135deg, #0f4c81, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ex-sub {
          font-size: 1rem;
          color: #71717a;
          line-height: 1.75;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
        }

        /* Filter card */
        .ex-filter-card {
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 24px;
          padding: 24px 28px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
          margin-bottom: 36px;
        }
        .ex-search-wrap {
          position: relative;
          margin-bottom: 20px;
        }
        .ex-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #a1a1aa;
          font-size: 1rem;
          pointer-events: none;
        }
        .ex-search-input {
          font-family: 'Sora', sans-serif;
          width: 100%;
          box-sizing: border-box;
          padding: 14px 16px 14px 44px;
          background: #fafafa;
          border: 1.5px solid #e4e4e7;
          border-radius: 14px;
          font-size: 0.9rem;
          color: #18181b;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .ex-search-input::placeholder { color: #a1a1aa; }
        .ex-search-input:focus {
          border-color: #0f4c81;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(15,76,129,0.08);
        }
        .ex-filter-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ex-filter-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a1a1aa;
          margin-right: 4px;
          white-space: nowrap;
        }
        .ex-cat-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 15px;
          border-radius: 99px;
          border: 1.5px solid #e4e4e7;
          background: #fafafa;
          font-family: 'Sora', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #52525b;
          cursor: pointer;
          transition: all 0.15s;
        }
        .ex-cat-btn:hover {
          border-color: #0f4c81;
          color: #0f4c81;
          background: #f0f4ff;
        }
        .ex-cat-btn.active {
          background: linear-gradient(135deg, #1a56c4, #0f4c81);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 3px 12px rgba(15,76,129,0.28);
        }

        /* Result row */
        .ex-result-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ex-result-count {
          font-size: 0.82rem;
          font-weight: 500;
          color: #71717a;
        }
        .ex-result-count strong { color: #18181b; font-weight: 700; }

        /* Grid */
        .ex-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, 320px);
          justify-content: center;
          gap: 20px;
          align-items: stretch;
        }

        /* Empty */
        .ex-empty {
          max-width: 500px;
          margin: 60px auto 0;
          background: #fff;
          border: 1.5px dashed #e4e4e7;
          border-radius: 24px;
          padding: 56px 36px;
          text-align: center;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
        }
        .ex-empty-icon { font-size: 2.8rem; margin-bottom: 16px; }
        .ex-empty-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #18181b;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .ex-empty-sub {
          font-size: 0.875rem;
          color: #71717a;
          line-height: 1.65;
        }
      `}</style>

      <Navbar />

      <div className="ex-page">
        <div className="ex-blob-1" />
        <div className="ex-blob-2" />

        <div className="ex-inner">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ex-hero"
          >
            <div className="ex-eyebrow">
              <span className="ex-eyebrow-dot" />
              Verified Campaigns
            </div>
            <h1 className="ex-h1">
              Explore <em>Campaigns</em>
            </h1>
            <p className="ex-sub">
              Discover verified fundraising campaigns, support meaningful causes,
              and help people who truly need your contribution. Every donation
              makes a real difference in someone's life.
            </p>
          </motion.div>

          {/* Filter card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="ex-filter-card"
          >
            <div className="ex-search-wrap">
              <FiSearch className="ex-search-icon" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ex-search-input"
              />
            </div>
            <div className="ex-filter-row">
              <span className="ex-filter-label">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`ex-cat-btn${category === cat ? " active" : ""}`}
                >
                  <span>{categoryIcons[cat]}</span>
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Result count */}
          <div className="ex-result-row">
            <div className="ex-result-count">
              Showing <strong>{filteredCampaigns.length}</strong> campaign{filteredCampaigns.length !== 1 ? "s" : ""}
              {category !== "All" && <> in <strong>{category}</strong></>}
            </div>
          </div>

          {/* Grid or empty */}
          {filteredCampaigns.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="ex-grid"
            >
              {filteredCampaigns.map((campaign) => (
                <CampaignCard
                  key={campaign._id}
                  campaign={{
                    id: campaign._id,
                    title: campaign.title,
                    raised: campaign.raisedAmount,
                    goal: campaign.targetAmount,
                    image: `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/${campaign.image}`,
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ex-empty"
            >
              <div className="ex-empty-icon">🔍</div>
              <div className="ex-empty-title">No Campaigns Found</div>
              <p className="ex-empty-sub">
                No campaigns match your current search or selected category.
                Try another keyword or choose a different category to explore more.
              </p>
            </motion.div>
          )}

        </div>
      </div>
    </>
  );
}

export default Explore;