export interface student {
  rollno: string;
  password: string;
  cpassword: string;
  batch: string;
  fname: string;
  mname: string;
  lname: string;
  phone: string;
  altphone: string;
  email: string;
  family_income: string;
  category: string;
  dob: string;
  gender: string;
  altemail: string;
  p_add_l1: string;
  p_add_l2: string;
  p_state: string;
  p_city: string;
  p_country: string;
  p_zip: string;
  c_add_l1: string;
  c_add_l2: string;
  c_state: string;
  c_city: string;
  c_country: string;
  c_zip: string;
  father_name: string;
  father_occ: string;
  mother_name: string;
  mother_occ: string;
  admission_year: string;
  passing_year: string;
  drop_year: string;
  course: string;
  branch: string;
  curr_sem: string;
  entry_level: string;
  total_backlog: string;
  active_backlog: string;
  fail_year: string;
  minor_training: string;
  minor_project: string;
  major_training: string;
  major_project: string;
  curr_cgpa: string;
  sem1_sgpa: string;
  sem1_total_credit: string;
  sem1_earned_credit: string;
  sem2_sgpa: string;
  sem2_total_credit: string;
  sem2_earned_credit: string;
  sem3_sgpa: string;
  sem3_total_credit: string;
  sem3_earned_credit: string;
  sem4_sgpa: string;
  sem4_total_credit: string;
  sem4_earned_credit: string;
  sem5_sgpa: string;
  sem5_total_credit: string;
  sem5_earned_credit: string;
  sem6_sgpa: string;
  sem6_total_credit: string;
  sem6_earned_credit: string;
  sem7_sgpa: string;
  sem7_total_credit: string;
  sem7_earned_credit: string;
  sem8_sgpa: string;
  sem8_total_credit: string;
  sem8_earned_credit: string;
  tn_board: string;
  tn_pass_year: string;
  tn_agg_percent: string;
  tn_school: string;
  tn_city: string;
  tn_state: string;
  tn_zip: string;
  tw_board: string;
  tw_pass_year: string;
  tw_agg_percent: string;
  tw_school: string;
  tw_city: string;
  tw_state: string;
  tw_zip: string;
  g_degree: string;
  g_course: string;
  g_university: string;
  g_pass_year: string;
  g_agg_percent: string;
  g_city: string;
  g_state: string;
  g_zip: string;
  d_degree: string;
  d_course: string;
  d_university: string;
  d_pass_year: string;
  d_agg_percent: string;
  d_city: string;
  d_state: string;
  d_zip: string;
  master_lock: boolean;
  secondary_lock: boolean;
  isverified: boolean;
  ismainformsubmitted: boolean;
  isuploadformsubmitted: boolean;
  photolink: string,
  resumelink: string,
  tnlink: string,
  twlink: string,
  dlink: string,
  glink: string
}

export interface filters {
  branch: string;
  course: string;
  cgpa: string;
  minx: string;
  minxii: string;
  activebacklog: string;
  mind: string;
  ming: string;
}

export interface tablecontent {
  rollno: string,
  fname: string,
  lname: string,
  mname: string,
  phone: string,
  email: string
}
