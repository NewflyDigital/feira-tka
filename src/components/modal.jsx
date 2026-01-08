import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/Modal.module.css";
import { useState } from "react";

export default function ModalOrcamento({ open, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onClose();
  };

  if (!open) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.modalTitle}>
          Become an Authorized TKA Dealer
        </h2>

        <p className={styles.modalSubtitle}>
          Tell us about your company and market. Our international team will
          contact you.
        </p>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "100%" }}
          noValidate
        >
          <TextField
            label="Full Name *"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            size="small"
            fullWidth
            sx={{ mb: "1rem" }}
          />

          <TextField
            label="Company Name *"
            name="company"
            value={form.company}
            onChange={handleChange}
            size="small"
            fullWidth
            sx={{ mb: "1rem" }}
          />

          <TextField
            label="Country / Region *"
            name="country"
            value={form.country}
            onChange={handleChange}
            size="small"
            fullWidth
            sx={{ mb: "1rem" }}
          />

          <TextField
            label="Email *"
            name="email"
            value={form.email}
            onChange={handleChange}
            size="small"
            fullWidth
            sx={{ mb: "1rem" }}
          />

          <TextField
            label="Phone / WhatsApp"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            size="small"
            fullWidth
            sx={{ mb: "1rem" }}
          />

          <TextField
            label="Tell us about your market and experience"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            sx={{ mb: "1.5rem" }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#ff5d02",
              padding: "0.75rem",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#ff7a33",
              },
            }}
          >
            Submit Application
          </Button>
        </Box>
      </div>
    </div>
  );
}
