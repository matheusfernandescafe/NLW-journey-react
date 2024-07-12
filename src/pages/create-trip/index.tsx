import React, { FormEvent, useState } from "react";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { Rodape } from "./rodape";
import { useNavigate } from "react-router-dom";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(["teste@email.com"]);

  function changeGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen);
  }

  function changeModalInput() {
    setIsGuestsModalOpen(!isGuestsModalOpen);
  }

  function changeConfirmaTripModalOpen() {
    setIsConfirmTripModalOpen(!isConfirmTripModalOpen);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) return;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter((invited) => invited !== emailToRemove);

    setEmailsToInvite(newEmailList);
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep isGuestsInputOpen={isGuestsInputOpen} changeGuestsInput={changeGuestsInput} />

          {isGuestsInputOpen && <InviteGuestsStep changeModalInput={changeModalInput} emailsToInvite={emailsToInvite} changeConfirmaTripModalOpen={changeConfirmaTripModalOpen} />}
        </div>

        <Rodape />
      </div>

      {isGuestsModalOpen && <InviteGuestsModal emailsToInvite={emailsToInvite} addNewEmailToInvite={addNewEmailToInvite} changeModalInput={changeModalInput} removeEmailFromInvites={removeEmailFromInvites} />}

      {isConfirmTripModalOpen && <ConfirmTripModal changeConfirmaTripModalOpen={changeConfirmaTripModalOpen} createTrip={createTrip} />}
    </div>
  );
}
