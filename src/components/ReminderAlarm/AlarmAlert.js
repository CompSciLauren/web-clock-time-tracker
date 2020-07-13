import React, { useState } from "react";
import Button from "terra-button";
import IconCheckmark from "terra-icon/lib/icon/IconCheckmark";
import NotificationDialog from "terra-notification-dialog";

const CompleteNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <NotificationDialog
        isOpen={isOpen}
        title="Your clock out time has now been set."
        startMessage="Your alarm has been set."
        acceptAction={{
          text: "Okay",
          onClick: handleCloseModal,
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button
        icon={<IconCheckmark height="1em" width="1em" />}
        text=""
        onClick={handleOpenModal}
      />
    </>
  );
};
export default CompleteNotificationDialog;
