export interface Vacancies {
  items: VacanciesItems[]
}

export interface VacanciesItems {
  "id": string
  "premium": boolean,
  "name": string
  "department": string | null,
  "has_test": boolean,
  "response_letter_required": boolean,
  "area": {
    "id": string
    "name": string
    "url": string
  },
  "salary": {
    "from": number
    "to": null,
    "currency": string
    "gross": boolean
  },
  "type": {
    "id": string
    "name": string
  },
  "address": string |null
  "response_url":  string |null
  "sort_point_distance":  string |null
  "published_at":  string |null
  "created_at": string |null
  "archived": boolean,
  "apply_alternate_url": string |null
  "show_logo_in_search": string |null
  "insider_interview": string |null
  "url":  string |null
  "alternate_url":  string |null
  "relations": [],
  "employer": {
    "id": string |null
    "name": string |null
    "url": string |null
    "alternate_url": string |null
    "logo_urls": {
      "original": string |null
      "240": string |null
      "90": string |null
    },
    "vacancies_url": string |null
    "accredited_it_employer": boolean,
    "trusted": boolean
  },
  "snippet": {
    "requirement": string |null
    "responsibility": string |null
  },
  "contacts": string |null,
  "schedule": {
    "id": string |null
    "name": string |null
  },
  "working_days": [],
  "working_time_intervals": [],
  "working_time_modes": [],
  "accept_temporary": boolean,
  "professional_roles": [
    {
      "id": string |null
      "name": string |null
    }
  ],
  "accept_incomplete_resumes": boolean,
  "experience": {
    "id": string |null
    "name": string |null
  },
  "employment": {
    "id": string |null
    "name": string |null
  },
  "adv_response_url": string |null,
  "is_adv_vacancy": boolean,
  "adv_context": string |null
}