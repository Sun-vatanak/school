import { useDashboardStore } from "@/stores/views/dashboard";

export const en = {
  dashboard: {
    header: {
      title: "Homework 3",
      subtitle: "Customer's information management system.",
    },
    chart_left: {
      title: "Customer By Branch",
      subtitle: "Display numbers of customers by branch",
    },
    chart_right: {
      title: "Total Customer",
      subtitle: "Display numbers of all customer",
    },
  },
  branch: {
    branch1: "Kandal Branch",
    branch2: "Phnom Penh Branch",
    branch3: "Prey Veng Branch",
  },
  gender: {
    male: 'Male',
    female: 'Female',
  },
  mdl_del: {
    title: 'Delete Customer',
    subtitle: 'Please read and repsonse confirmation message',
    confirm_text: {
      confirm: 'Are you sure to delete customer',
      real: '?',
      warn: 'After delete, this data will be lost!'
    },
    btn_cancel: 'Cancel',
    btn_confirm: 'Ok, Got it'

  },
  mdl_crop: {
    title: 'Crop Image',
    subtitle: 'Select a 500 x 500 image for a clear result',
    btn_cancel: 'Cancel',
    btn_change: 'Change Image',
    btn_confirm: 'Crop Image'
  },

  mdl_err: {
    title: 'Invalid email!',
    subtitle: 'This email is already taken. Please try a different one',
    btn_ok: 'Okay'
  },
  size_err: {
    title: 'Check Again!',
    subtitle: 'File size exceeds the 1MB limit. Please select a smaller file.',
  },
  frm_add: {
    title: 'Add Customer',
    edit_title: 'Edit Customer',
    subtitle: "Please enter customer's information below",
    frm: {
      title: "Customer's photo",
      subtitle: 'Please choose only file .jpg or .png(500x500)px',
      choose: 'Choose',
      delete: 'Delete',
      input_labels: {
        first_name: 'First name',
        last_name: 'Last name',
        gender: 'Gender',
        branch: 'Branch',
        email: 'Email',
      },
      val: {
        first_name: 'Please enter first name',
        last_name: 'Please enter last name',
        gender: 'Please choose gender',
        branch: 'please choose branch',
        email: 'please enter email',
        email_val: 'please enter valid email',
        email_exist: 'Email already taken'
      },
      btn: {
        back: 'Back',
        clear: 'Clear',
        add: 'Add Customer',
        edit: 'Edit Customer'
      }
    }
  },
  people: 'people',
  total: 'Total',
  customer: {
    customer_list: {
      title: "Customer List",
      subtitle: "Display all customer's information",
      add_button: "Add Customer",
      table_header: {
        id: "ID",
        customer: "Customer",
        gender: "Gender",
        branch: "Branch",
        email: "Email",
        action: "Action",
      },
    },
  },
};
