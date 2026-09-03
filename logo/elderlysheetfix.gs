// แทนที่ ELDERLY_HEADERS เดิม ด้วยอันนี้ (ลำดับคอลัมน์จริงในชีต "จัดการข้อมูลผู้สูงอายุ")
var ELDERLY_HEADERS = [
  "รหัสผู้สูงอายุ", "ชื่อ", "นามสกุล", "วันเกิด", "ที่อยู่",
  "เบอร์โทรศัพท์", "ผู้ติดต่อฉุกเฉิน", "ญาติหรือผู้ดูแล",
  "โรคประจำตัว", "ประวัติการแพ้ยา", "ยาที่รับประทาน",
  "โรงพยาบาลที่ใช้บริการ", "ระดับความสามารถในการช่วยเหลือตนเอง",
  "สถานะการอยู่อาศัย", "รูปภาพผู้สูงอายุ", "พิกัดตำแหน่งบ้าน"
];

// แทนที่ addElder_ เดิม ด้วยอันนี้ (รับ fields เป็น object แทน fullName เดี่ยว)
// ใช้แบบนี้: addElder_("E0001", { firstName: "สมชาย", lastName: "ใจดี", birthDate: "1950-01-01", ... })
function addElder_(elderId, fields) {
  if (findElderRowByElderId_(elderId)) {
    return "มีรหัส " + elderId + " อยู่แล้วในระบบ";
  }
  fields = fields || {};
  var sheet = getElderlySheet_();
  var row = [
    elderId,
    fields.firstName || "",
    fields.lastName || "",
    fields.birthDate || "",
    fields.address || "",
    fields.phone || "",
    fields.emergencyContact || "",
    fields.caregiver || "",
    fields.chronicConditions || "",
    fields.drugAllergies || "",
    fields.currentMedications || "",
    fields.hospital || "",
    fields.adlLevel || "",
    fields.livingStatus || "",
    fields.photo || "",
    fields.homeLocation || ""
  ];
  sheet.appendRow(row);
  var displayName = (fields.firstName || "") + " " + (fields.lastName || "");
  return "เพิ่มผู้สูงอายุ " + displayName + " (" + elderId + ") แล้ว";
}
