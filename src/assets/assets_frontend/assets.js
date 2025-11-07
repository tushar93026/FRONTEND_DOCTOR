import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Nitin Tomar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS, Fics, Mch',
        experience: '20 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: '513, 5th Floor, Kokilaben Hospital',
            line2: 'Circle, Ring Road, Indore'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr.Dr. Sunita Chouhan',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS, F.MAS, FICOG',
        experience: '22 Years',
        about: 'Dr. Sunita Chouhan is among the best & reputed doctor from Indore with an overall experience of 22 years. She has successfully completed M.B.B.S, M.S., in 2001. She has also done Infertility training from Niles & Aakar IVF center Mumbai, & Advanced Laparoscopy & Hysteroscopy Training from Cochin Gynecological Endoscopic & Infertility training center, Paul-Hospital Cochin, Kerala in 2007&F.MAS [Fellowship in Minimally Invasive Surgery] In 2014. Dr. Sunita has a special interest in Gynec laparoscopic surgery& Infertility',
        fees: 1600,
        address: {
            line1: '514, 5th Floor, Kokilaben Hospital',
            line2: 'Circle, Ring Road, Indore'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sheena Kapoor',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD, FAM, FIDD(Mumbai)',
        experience: '6 Years',
        about: 'Dr. Sheena Kapoor is a board-certified Dermatologist from Indore. She specialized in dermatology at D.Y. Patil University, School of Medicine, Mumbai, and has a senior residency from King Edward Medical College (KEM), Mumbai. During her academic studies, she published several articles and presented her work at several national and international conferences. She did a fellowship in Aesthetic Medicine (FAM), Mumbai, and a Fellowship in Diagnostic Dermatology (FIDD) from KEM Hospital, Mumbai. She has also worked as a consultant at Kaya Skin Clinic. She maintains active membership in numerous national and international medical associations. Her main areas of interest are Clinical Dermatology( treating Skin, Hair, and Nail diseases), cosmetology, and Diagnostic Dermatology. She believes in providing holistic skin care to her patients.',
        fees: 1500,
        address: {
            line1: '514, 5th Floor, Kokilaben Hospital',
            line2: 'Circle, Ring Road, Indore'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD-Paediatrics',
        experience: '7 Years',
        about: 'Dr.Saurabh Piparsania is an expert and experienced Pediatrics with an experience of 7years. The doctor specializes in Pediatrics. Currently, Saurabh Piparsania is practicing at CARE CHL Hospitals - Indore | OPD in A B Road, Indore , is fluent in English, Hindi and provides compassionate care for all the patients to ensure complete recovery and strives to provide advanced medical care in a comfortable and holistic environment for all patients coming for treatment.',
        fees: 1400,
        address: {
            line1: 'CARE CHL Hospitals',
            line2: 'LIG, AB Road Indore'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Atul Taparia ',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DNB(Neurology), DM-Neurology',
        experience: '24 Years',
        about: 'Dr Atul Taparia obtained his medical degree from Devi Ahilya University Indore. He went on to successfully complete his post-graduate training in Medicine obtaining the Doctor of Medicine from GRMC Gwalior. He did his DM from Mumbai University and DNB Neurology (DNB Board), in 2001. He was privileged to have trained under the tutelage of Dr BS Singhal in Neurology at BHIMS (Bombay Hospital Institute of Medical Sciences Mumbai) from 1997 to 2001.Following his return, he joined Bombay Hospital Indore as Neurologist where he introduced and established the specialty of Neurology. expertised in critical Neurological Illness, Stroke, Epilepsy, Movement Disorders, Headache and Neuromuscular Diseases.',
        fees: 1700,
        address: {
            line1: '118, 1st Floor, OPD Area',
            line2: 'Bombay Hospital, Indore '
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Alok Mandliya',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DM(neurology)',
        experience: '13 Years',
        about: 'Dr. Alok Mandliya obtained his medical graduation from MGM Medical college Indore. He went on to successfully complete his post-graduate training in Medicine obtaining the Doctor of Medicine from prestigious Seth GS Medical college and KEM Hospital Mumbai with gold medal. He was awarded by prestigious Jaykar Award in Mumbai in 2010. He did his DM from world renowned Sri Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST), Trivandrum with gold medal. He was trained under the guidance of Dr D R Karnad and Dr Prof.K Radhakrishnan. In 2013 he was rewarded as best young neurologist in India.',
        fees: 1700,
        address: {
            line1: '103, 1st Floor, OPD Area',
            line2: 'Bombay Hospital, Indore'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr.Manish Jain',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS, MD, DNB',
        experience: '23 Years',
        about: 'Dr. Manish Jain obtained his medical degree from Gandhi Medical College Bhopal, MP. He went on to successfully complete his post-graduate training in Medicine obtaining the Doctor of Medicine from Medical Colletge Raipur. He did his DNB from Diplomat National Board New Delhi in 1998. He worked as Assistant Professor in the department of Medicine, Medical College Rewa from 1998 to 1999.',
        fees: 1500,
        address: {
            line1: '108, 1st Floor, OPD Area',
            line2: 'Bombay Hospital, Indore'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Kavita (Gupta) Ghadale',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, FMAS, DNB',
        experience: '13 Years',
        about: 'Dr. Kavita (Gupta) Ghadale has been outstanding student of Anandvihar School Bhopal & got selected in PMT in first attempt in1991. Completed for MBBS Successfully from GMC Bhopal in first attempt & got Gold medal in Forensic medicine. Then did her DNB (Obst & Gynae ) in 2002 and cleared Practical Exam From AIIMS-New Delhi in first attempt. She worked as a consultant in National & Gastrocare hospital as Obstetrician, Gynaecologist, Infertility Specialist & Laproscopic surgeon.She did her FMAS in 2014 & did many simple & complicated laparoscopic surgeries in last 5 years',
        fees: 1600,
        address: {
            line1: '125B, 1st Floor, OPD Area',
            line2: 'Bombay Hospital, Indore'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Anil Dashore',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, DM(dermatology)',
        experience: '35 Years',
        about: 'Dr.Dashore has been dedicated to the field of dermatology since 35 years and has a vast experience in the field. Our pride is in our continuous research After completing his research work at AIIMS New Delhi and writing 30 research papers and 3 books, In 1991 he opened the first of its kind Skin Centre in INDORE. He introduced Laser treatment to the city of INDORE for the first time. This centre competed with the biggest centres of the country at that time. which provides solution for skin conditions like vitiligo, Psoriasis, rosacea, acne, acne scars, pigmentation, tanning and wrinkle reduction. Dr Dashores dedication to each patients well being is reason behind the faith that his patients have in him..',
        fees: 800,
        address: {
            line1: '2nd floor, DHL clinis',
            line2: 'Sapna sangeeta, Indore'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rakesh Shukla',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD-pediatrics',
        experience: '26 Years',
        about: 'Dr. Rakesh Shukla Post Graduation From Mumbai. After Passing Post Graduation Worked In Nicu Unit Of Fortis Hospital Mubai For 1 Year. Then Shifted To New Delhi And Worked In Prestigious Sir Gangaram Hospital New Delhi As Intensivist In Pediatric Icu And Pediatric Cardiac Icu. Have Experience Of Working In Both Private And Government Hospitals. Trained In Intensive Care Management Also Having Special Interest In Growth And Development Issues Of Child',
        fees: 1500,
        address: {
            line1: '114, 1st Floor, OPD Area',
            line2: 'Bombay Hospital, Indore'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Pranav Ghodgaonkar',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, MS, MCh(neuroSurgery)',
        experience: '19 Years',
        about: 'Dr. Pranav Ghodgaonkar is a Consultant - Neurosurgeon in Indore, holding an overall experience of 19 years. He has done training in Neurological Surgery from the University of Mumbai, Japan and Germany. Dr Ghodgaonkar worked as an assistant professor of Neurosurgery at Grant Medical College, Mumbai, from 2006 to 2010. Dr. Ghodgaonkar has been trained in Vascular Neurosurgery at Fujita Health University, Nagoya, and has received a WFNS fellowship and training at the University of Tübingen, Germany',
        fees: 1500,
        address: {
            line1: '502, 5th Floor, kokilaben hospital',
            line2: 'Ring Road, Indore'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Dinesh Chouksey',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DM(neuro)',
        experience: '18 Years',
        about: 'Dr. Dinesh Chouksey is having 18 years of experience in clinical practice and academic teaching, he was Professor and Head of the Department of Neurology, Sri Aurobindo Medical College Hospital Indore. He is having exquisite academic background with several research publications in national and international journals. Being Professor & Head Neurology he did thorough academic work in the department and taught clinical skills to DM Neurology students since 08 years and provide best care to neurological patient. His keen interest in Parkinsons disease and various movement disorders, Deep Brain stimulation planning and programming, doing regularly botulinum toxin (Botox) injection therapy for different neurological indications. He as unit head involve in dedicated management of stroke and other patients neurocritical care. His mission to deliver timely, scientific, ethical treatment to neurological patients to reduce their morbidity and serves humanity.',
        fees: 1500,
        address: {
            line1: '503, 5th Floor, kokilaben hospital',
            line2: 'Ring Road, Indore'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Ashwin Parchani ',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '4 Years',
        about: 'Dr. Ashwin Parchani is an accomplished Internal Medicine Physician with a rich academic and professional background. He completed his MBBS from Kasturba Medical College, Manipal University on a merit-based scholarship. He later pursued an MD in General Medicine from the All India Institute of Medical Sciences (AIIMS), Rishikesh, where he also did his senior residency in Geriatrics (Elderly medicine). Driven by his interest in diabetes management, Dr. Parchani pursued further training in the form of CPCDM (RSSDI-certified course in diabetology).',
        fees: 1500,
        address: {
            line1: '117, 1st Floor, OPD Area',
            line2: 'Bombay Hospital, Indore'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ruchira Pahare',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '28 Years',
        about: 'I have worked at some of the best hospitals in the country as a consultant Paediatrician and Neonatologist. I also have academic experience working as an Assistant Professor at B.J. Wadia Hospital for Children in Mumbai from the year 2003-2006, where I worked in the Neonatal, Cardiac and Nephrology units of the institution and taught undergraduates and postgraduates along with being a full-time paediatric and neonatal consultant. After that, I was affiliated with K.J. Somaiya Medical College in Mumbai from 2006-2007 as an Assistant Professor in the Department of Paediatrics and Neonatology. Since 2007 till Nov 2022,I was working as full-time Senior Consultant Paediatrician and Neonatologist at Bombay Hospital, Indore which is a tertiary care NABH accredited hospital in Indore..',
        fees: 1600,
        address: {
            line1: '506, 5th Floor, kokilaben hospital',
            line2: 'Ring Road, Indore'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Harshit Kothari',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Harshita Kothari is a leading dermatologist in Indore ranked amongst top 5 with an MD in Dermatology from TMU University and an international fellowship in Aesthetic Medicine from Germany. Her expertise includes acne treatment, laser hair reduction, medical facials, face lift & contouring, treatments for anti - aging, scar, hairloss, hair transplant, skin lightening and pigmentation. She specializes in Botox, Fillers, and cosmetic procedures. She has authored publications and conducted workshops on facial rejuvenation techniques, Dermal Fillers, Hair Transplant & PRP treatments. With ten years of experience and global exposure, ',
        fees: 1300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]